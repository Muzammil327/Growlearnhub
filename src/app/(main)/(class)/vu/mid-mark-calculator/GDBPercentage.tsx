import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/Label";

export default function GDBPercentage({
  calculatedGDB,
  setCalculatedGDB,
}: any) {
  const [totalGDB, setTotalDGB] = useState<number>(0);
  const [obtainedGDB, setObtainedDGB] = useState<number>(0);
  const [GDBPercentage, setDGBPercentage] = useState<number>(0);

  const calculateGDBPercentage = (
    obtainedGDB: number,
    totalGDB: number,
    GDBPercentage: number,
  ): number => {
    if (totalGDB === 0) {
      return 0; // Default value or handle appropriately
    }

    return (obtainedGDB / totalGDB) * ((GDBPercentage / 100) * 100);
  };
  useEffect(() => {
    const data1 = calculateGDBPercentage(obtainedGDB, totalGDB, GDBPercentage);
    if (data1) {
      setCalculatedGDB(data1);
    }
  }, [obtainedGDB, GDBPercentage, totalGDB, setCalculatedGDB]);

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value); // Convert string to number using parseFloat

    setObtainedDGB(parsedValue);
  };

  return (
    <div className="mt-1 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="my-4">
        <Label htmlFor="GDBPercentage" />
        <Input
          name="GDBPercentage"
          type="number"
          value={GDBPercentage || ""}
          placeholder="Enter Your Total GDB Percentage"
          onChange={(e) => setDGBPercentage(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="totalGDB" />
        <Input
          name="totalGDB"
          type="number"
          value={totalGDB || ""}
          placeholder="Enter Your Total GDB Marks"
          onChange={(e) => setTotalDGB(parseInt(e.target.value))}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="obtainedGDB" />
        <Input
          name="obtainedGDB"
          type="number"
          value={obtainedGDB || ""}
          placeholder="Enter Your Total Obtained GDB Marks"
          onChange={handleDecimalChange}
        />
      </div>
      <Button>{calculatedGDB}</Button>
    </div>
  );
}
