import { enableInput, message, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const handleDeleteJob = async (jobId) => {
  enableInput(false);

  try {
    const response = await fetch(`/api/v1/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      message.textContent = "Entry successfully deleted.";
      showJobs();
    } else {
      message.textContent = "Failed to delete entry.";
      showJobs();
    }
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
    showJobs();
  }

  enableInput(true);
};
