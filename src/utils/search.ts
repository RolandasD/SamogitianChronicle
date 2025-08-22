export type Doc = { url:string; title:string; content:string };
export async function getIndex(): Promise<Doc[]> {
  const res = await fetch('/search-index.json');
  return res.json();
}
export function basicSearch(docs:Doc[], q:string){
  const needle = q.toLowerCase();
  return docs
    .map(d => ({...d, score: (d.title.toLowerCase().includes(needle)?2:0) + (d.content.toLowerCase().includes(needle)?1:0)}))
    .filter(d => d.score>0)
    .sort((a,b)=> b.score-a.score)
    .slice(0,20);
}
