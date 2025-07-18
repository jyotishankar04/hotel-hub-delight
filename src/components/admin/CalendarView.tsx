import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export const CalendarView = () => {
    // Sample data for the calendar
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const bookings = {
        5: ["Deluxe Suite - John Smith"],
        10: ["Standard Room - Emma Davis", "Suite - Mike Wilson"],
        15: ["Deluxe Room - Sarah Johnson"],
        20: ["Standard Room - David Brown"],
        25: ["Suite - Lisa Taylor"],
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">January 2024</h3>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                        Today
                    </Button>
                    <Button variant="outline" size="sm">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {days.map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">
                        {day}
                    </div>
                ))}

                {dates.map((date) => (
                    <div
                        key={date}
                        className={`min-h-24 border rounded-md p-1 ${date > 19 ? "opacity-50" : ""
                            }`}
                    >
                        <div className="text-right text-sm mb-1">{date}</div>
                        {bookings[date as keyof typeof bookings]?.map((booking, idx) => (
                            <div
                                key={idx}
                                className="text-xs p-1 mb-1 bg-blue-50 text-blue-800 rounded truncate"
                            >
                                {booking}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="flex justify-between pt-4">
                <Button variant="outline" size="sm">
                    List View
                </Button>
                <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Booking
                </Button>
            </div>
        </div>
    );
};