export type Weekday = "M" | "T" | "W" | "Th" | "F" | "Sa" | "Su"
export const weekdays: Weekday[] = ["M", "T", "W", "Th", "F", "Sa", "Su"]

export type Day = {
    date: Date,
    day: Weekday
}
