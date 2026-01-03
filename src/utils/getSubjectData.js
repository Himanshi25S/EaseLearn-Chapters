import evs from "../data/class5/evs.json";
import maths from "../data/class5/maths.json";
// import hindi from "../data/class5/hindi.json";
// import english from "../data/class5/english.json";

export function getSubjectData(subject) {
  switch (subject) {
    case "evs":
      return evs;
    case "maths":
      return maths;
    case "hindi":
      return hindi;
    case "english":
      return english;
    default:
      return null;
  }
}
