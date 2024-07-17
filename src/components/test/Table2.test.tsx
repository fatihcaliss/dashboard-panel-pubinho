import { render, screen } from "@testing-library/react";
import Table2 from "../tables/Table2";
import { useGetTable2DataQuery } from "../../services/api";

// Mocking the useGetTable2DataQuery hook
jest.mock("../../services/api", () => ({
  useGetTable2DataQuery: jest.fn(),
}));

describe("Table2 Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    // Mock isLoading as true
    (useGetTable2DataQuery as jest.Mock).mockReturnValueOnce({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<Table2 />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    // Mock error state
    (useGetTable2DataQuery as jest.Mock).mockReturnValueOnce({
      data: undefined,
      error: new Error("Data loading error"),
      isLoading: false,
    });

    render(<Table2 />);

    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });
});
