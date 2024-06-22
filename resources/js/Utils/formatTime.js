export const formatTime = (timeValue) => {
    const dateString = `2024-05-30 ${timeValue}`;
    const time = new Date(dateString);

    const formatTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return formatTime;
};
