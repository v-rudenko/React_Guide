import Concept from "./Concept";

const ConceptList = ({ concepts }) => {
  const displayedConcepts = concepts.map((concept) => (
    <Concept
      title={concept.title}
      description={concept.description}
      image={concept.image}
    />
  ));
  return <ul id="concepts">{displayedConcepts}</ul>;
};
export default ConceptList;
