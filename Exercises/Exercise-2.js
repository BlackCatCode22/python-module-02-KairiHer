def calculate_pay(hours, rate):
    """Calculates total pay including overtime if hours exceed 40."""
    if hours > 40:
        overtime = hours - 40
        return (40 * rate) + (overtime * rate * 1.5)
    else:
        return hours * rate

def main():
    """Main function to get user input, calculate pay, and handle exceptions."""
    try:
        # Prompt the user for input
        hours_input = input("Enter hours worked: ")
        rate_input = input("Enter hourly rate: ")
        
        # Check for missing inputs
        if not hours_input.strip() or not rate_input.strip():
            raise ValueError("Input cannot be empty.")
        
        # Convert inputs to float
        hours = float(hours_input)
        rate = float(rate_input)

        # Ensure inputs are positive
        if hours < 0 or rate < 0:
            raise ValueError("Hours and rate must be non-negative.")
        
        # Calculate and display pay
        pay = calculate_pay(hours, rate)
        print(f"Total pay: ${pay:.2f}")

    except ValueError as e:
        # Handle invalid or missing input
        print(f"Error: {e}")
    except Exception as e:
        # Catch any other unexpected exceptions
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
