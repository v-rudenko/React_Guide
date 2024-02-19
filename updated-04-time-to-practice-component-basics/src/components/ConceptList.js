import Concept from "./Concept";

function ConceptList({ concepts }) {
  const displayedConcepts = concepts.map((concept) => (
    <Concept
      title={concept.title}
      description={concept.description}
      image={concept.image} />
  ));
  return <ul id="concepts">{displayedConcepts}</ul>;
}
export default ConceptList;
