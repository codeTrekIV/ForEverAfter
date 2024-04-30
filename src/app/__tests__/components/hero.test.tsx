import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../../components/hero";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Home Page", () => {
  it("renders correctly with given props", () => {
    const title = "Test Title";
    const description = "Test Description";
    const imageUrl = "/test-image.jpg";

    render(
      <Hero title={title} description={description} imageUrl={imageUrl} />
    );

    // Check if the title and description are rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();

    // Check if the image is rendered with correct src and alt attributes
    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    const url = new URL(image.src);

    // Parse the search parameters to find the original image URL
    expect(url.searchParams.get("url")).toBe(imageUrl);
    expect(image.alt).toBe("ForEverAfter Logo");

    // Check if the button is rendered
    expect(
      screen.getByRole("button", { name: "Get Started" })
    ).toBeInTheDocument();
  });
});
