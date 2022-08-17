/**
 * Checks if the activity is valid and returns a false if the object is not valid
 *
 * Otherwise returns true
 * @param {object} activity the activity to be checked
 * @returns boolean
 */

function isActivityValid(activity) {
  // Is not null or undefined
  if (activity === null || activity === undefined) {
    return false;
  }
  // Is an object
  if (typeof activity !== "object") {
    return false;
  }
  // Must have a string property called "description"
  if (
    activity.description === null ||
    activity.description === undefined ||
    typeof activity.description !== "string"
  ) {
    return false;
  }
  // Description property is not an empty string
  if (activity.description.trim() === "") {
    return false;
  }
  return true;
}

module.exports = {
  isActivityValid,
};
