export const formatDate = (dateValue) => {
    const date = new Date(dateValue);

    const formatDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });

    return formatDate;
};
