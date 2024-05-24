interface FormData {
  title: string;
  description: string;
  keywordId: string[]; // Ensure keywordId is included
}

export const handleCheckboxChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<React.SetStateAction<FormData>>,
) => {
  const { name } = event.target;
  const isChecked = event.target.checked;

  // Update keywordId state based on checkbox selection
  setData((prevData) => {
    let updatedKeywords: string[];

    if (isChecked) {
      // Add keyword ID to the list if it's not already included
      updatedKeywords = [...prevData.keywordId];
      if (!updatedKeywords.includes(name)) {
        updatedKeywords.push(name);
      }
    } else {
      // Remove keyword ID from the list
      updatedKeywords = prevData.keywordId.filter(
        (keywordId) => keywordId !== name,
      );
    }

    // Return updated state
    return { ...prevData, keywordId: updatedKeywords };
  });
};
