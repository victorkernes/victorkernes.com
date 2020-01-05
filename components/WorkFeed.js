import WorkItem from "./WorkItem";

export default ({ data }) => {
  console.log(WorkItem);
  return(
  <section className="work-feed">
    {data.map((item, i) => {return <WorkItem key={i} item={item} />})} 
    
  </section>
)}
