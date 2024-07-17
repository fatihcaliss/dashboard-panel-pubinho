import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../NavBar";

describe("NavBar Component", () => {
  it("renders correctly with closed drawer", () => {
    render(<NavBar open={false} toggleDrawer={() => {}} />);

    // Check if the title "Dashboard" is rendered
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();

    // Check if the menu icon is rendered
    expect(screen.getByLabelText(/open drawer/i)).toBeInTheDocument();
  });

  it("calls toggleDrawer function when menu icon is clicked", () => {
    const toggleDrawerMock = jest.fn();
    render(<NavBar open={false} toggleDrawer={toggleDrawerMock} />);

    // Find and click the menu icon
    const menuIcon = screen.getByLabelText(/open drawer/i);
    fireEvent.click(menuIcon);

    // Check if toggleDrawer function is called once
    expect(toggleDrawerMock).toHaveBeenCalledTimes(1);
  });
});
