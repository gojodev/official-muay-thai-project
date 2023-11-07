
export default function TimeRemaining({ activationDate }) {
    if (!activationDate) return null;

    // Compute the expiry date by adding 30 days to the activation date
    const expiryDate = new Date(activationDate);
    expiryDate.setDate(expiryDate.getDate() + 30);

    // Calculate the difference between now and the expiry date
    const currentTime = new Date();
    const timeDiff = expiryDate - currentTime; // in milliseconds

    // Convert timeDiff to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Return based on the conditions you provided
    if (daysDiff > 30) {
        return <span>Your membership starts in {daysDiff - 30} days</span>;
    } else {
        return <span>{daysDiff > 0 ? `Days Left: ${daysDiff} ` : daysDiff === 0 ? "Expires today" : "Expired"}</span>;
    }
}