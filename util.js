/**
 * Checks if the activity is valid
 * @param {*} activity the activity to be checked
 * @returns boolean
 */
function isActivityValid(activity) {
  // Is not null or undefined
  if (activity === null || activity === undefined) {
    console.log("activity is null or undefined")
    return false;
  }
  // Is an object
  if (typeof activity !== "object") {
    console.log("activity is not an object")
    return false;
  }
  // Must have a string property called "description"
  if (
    activity.description === null ||
    activity.description === undefined ||
    typeof activity.description !== "string"
  ) {
    console.log("activity does not have a description property which is a string")
    return false;
  }
  // Description property is not an empty string
  if (activity.description.trim() === "") {
    console.log("activity is an empty string")
    return false;
  }
  return true;
}

module.exports = {
  isActivityValid
};
