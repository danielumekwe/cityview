import type { Testimonial } from "@/content/home";

type GooglePlaceReview = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
};

type GooglePlaceDetailsResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
  };
};

export type LiveReviews = {
  testimonials: Testimonial[];
  rating: number | null;
  totalReviews: number | null;
};

/**
 * Fetches live Google reviews for Cityview Bar & Lodge via the Places API.
 * Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in the environment.
 * Returns null when unconfigured or on any API error, so callers can fall
 * back to static content instead of breaking the page.
 */
export async function getGoogleReviews(): Promise<LiveReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = (await res.json()) as GooglePlaceDetailsResponse;
    if (data.status !== "OK" || !data.result?.reviews?.length) return null;

    const testimonials: Testimonial[] = data.result.reviews
      .filter((r) => r.text?.trim())
      .map((r) => ({
        quote: r.text.trim(),
        name: r.author_name,
        role: r.relative_time_description,
        avatar: r.profile_photo_url ?? null,
        rating: r.rating,
      }));

    if (!testimonials.length) return null;

    return {
      testimonials,
      rating: data.result.rating ?? null,
      totalReviews: data.result.user_ratings_total ?? null,
    };
  } catch {
    return null;
  }
}
