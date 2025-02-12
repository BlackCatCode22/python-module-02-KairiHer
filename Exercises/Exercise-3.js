def computepay(hours, rate):
    """Calculates total pay including overtime if hours exceed 40."""
    if hours > 40:
        overtime_hours = hours - 40
        overtime_pay = overtime_hours * rate * 1.5
        total_pay = (40 * rate) + overtime_pay
    else:
        total_pay = hours * rate
    return total_pay

def main():
    """Main function to get user input and calculate pay using computepay."""
    try:
        # Prompt the user for hours worked and hourly rate
        hours = float(input("Enter hours worked: "))
        rate = float(input("Enter hourly rate: "))

        # Calculate and display the total pay
        pay = computepay(hours, rate)
        print(f"Total pay: ${pay:.2f}")
    except ValueError:
        print("Error: Please enter valid numeric values for hours and rate.")

if __name__ == "__main__":
    main()
