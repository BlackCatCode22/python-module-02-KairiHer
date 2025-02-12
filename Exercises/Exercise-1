# Payroll Program with Overtime
def calculate_pay(hours, rate):
    if hours > 40:
        overtime = hours - 40
        return (40 * rate) + (overtime * rate * 1.5)
    else:
        return hours * rate

try:
    hours = float(input("Enter hours worked: "))
    rate = float(input("Enter hourly rate: "))
    pay = calculate_pay(hours, rate)
    print(f"Total pay: ${pay:.2f}")
except ValueError:
    print("Error: Please enter numeric values for hours and rate.")
