import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../SideBar";

describe("SideBar Component", () => {
  it("renders correctly with closed drawer", () => {
    render(<SideBar open={false} toggleDrawer={() => {}} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(/Tables/i)).toBeInTheDocument();
    expect(screen.getByText(/Charts/i)).toBeInTheDocument();
  });

  it("calls toggleDrawer function when ChevronLeftIcon is clicked", () => {
    const toggleDrawerMock = jest.fn();
    render(<SideBar open={true} toggleDrawer={toggleDrawerMock} />, {
      wrapper: MemoryRouter,
    });

    const chevronLeftIcon = screen.getByTestId("ChevronLeftIcon");
    fireEvent.click(chevronLeftIcon);

    expect(toggleDrawerMock).toHaveBeenCalledTimes(1);
  });

  it("navigates to Tables page when Tables link is clicked", () => {
    render(<SideBar open={true} toggleDrawer={() => {}} />, {
      wrapper: MemoryRouter,
    });

    const tablesLink = screen.getByText(/Tables/i);
    fireEvent.click(tablesLink);

    expect(screen.getByText(/Tables/i)).toBeInTheDocument();
  });

  it("navigates to Charts page when Charts link is clicked", () => {
    render(<SideBar open={true} toggleDrawer={() => {}} />, {
      wrapper: MemoryRouter,
    });

    const chartsLink = screen.getByText(/Charts/i);
    fireEvent.click(chartsLink);

    expect(screen.getByText(/Charts/i)).toBeInTheDocument();
  });
});
