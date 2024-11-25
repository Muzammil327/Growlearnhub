import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction, forwardRef, useState } from "react";

type InputTagsProps = {
    value: string[]; // We will keep this as a string[] to match the form field type
    onChange: Dispatch<SetStateAction<string[]>>; // Update this to accept a string[]
};

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
    ({ value, onChange, ...props }, ref) => {
        const [pendingDataPoint, setPendingDataPoint] = useState("");

        // Function to add new data points (tags)
        const addPendingDataPoint = () => {
            if (pendingDataPoint) {
                const newDataPoints = new Set([...value, pendingDataPoint]);
                onChange(Array.from(newDataPoints)); // Update the state
                setPendingDataPoint(""); // Reset the input field
            }
        };

        return (
            <div className="space-y-4">
                {/* Input and Add Button */}
                <div className="flex flex-wrap items-center gap-2">
                    <Input
                        value={pendingDataPoint}
                        onChange={(e) => setPendingDataPoint(e.target.value)} // Update input state
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === "," || e.key === " ") {
                                e.preventDefault();
                                addPendingDataPoint();
                            }
                        }}
                        className="flex-1 rounded-md border-gray-300 focus:ring-2 focus:ring-accent transition-all"
                        placeholder="Add a tag"
                        ref={ref}
                        {...props}
                    />
                    <Button
                        type="button"
                        variant="secondary"
                        className="border border-l-0 px-4 py-2 rounded-md"
                        onClick={addPendingDataPoint}
                    >
                        Add
                    </Button>
                </div>

                {/* Tag List */}
                <div className="flex flex-wrap gap-2">
                    {value.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="flex items-center space-x-1">
                            <span>{item}</span>
                            <button
                                type="button"
                                className="w-4 h-4 flex items-center justify-center p-0"
                                onClick={() => {
                                    onChange(value.filter((i) => i !== item));
                                }}
                            >
                                <XIcon className="w-3 h-3 text-red-500" />
                            </button>
                        </Badge>
                    ))}
                </div>
            </div>
        );
    }
);

InputTags.displayName = "InputTags";
