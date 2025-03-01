
import Card from "@Components/card";
import Image from "next/image";
import Animal from "./animal";


export default async function Home() {
  const data = await fetch('https://api.petfinder.com/v2/animals?limit=40', { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhdnFSaHpYNkk2dnh4QWVvYkRXMUF6NmJqNElmcEgzZ05HNGdHalQzTjJWSGpGa0lDTCIsImp0aSI6ImNhYjE1M2Y2NzlmNGU0ZjhjMDMzMDkzZGY0NWIzNTY4ZmVmZTU3MGU4NTcyNjgxMWUzMWU0OWExMjE2YjdiN2Q2OTVmNzFkZGRmMzlkYTY0IiwiaWF0IjoxNzQwNjg4NjU2LCJuYmYiOjE3NDA2ODg2NTYsImV4cCI6MTc0MDY5MjI1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZMIqYbEvvzf7QooV_2h76pfB82HBmuO5dsKV8OI5oVwDjQrzC3u4UsQpOOz4ekRnk_gOVkSTmaqCsQ-Itg_2TbAA2zxgRdj5Z8G8W5u_djmBjldib_wlw3a5aNAgPk9LE3eewguEComqZWzZBmIDZb9Fi6X4-6dx0hY2do9LMSsjnjfYOzz34V02zzDHkn5Iogvl3fUhVKkeLGkqpleYlJH2w7gPUQevX-97llMWKPuB4mDNMQHWB4skyd-mMpcxn8ufLmV1p5clbxCXfmNIp929goM-jT-uWyFwevQd_zrwdOxhs5uLemLcLB-xr7eiLVnoO-9c1x-iQu6V-hLuyA' } })
  const animals = await data.json() as { animals: Animal[] }

  console.log(animals)
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
      {animals.animals.filter(v => v.photos.length > 0).map((animal, i) => (
        <Card animal={animal} key={i} />
      ))}
    </div>
  );
}
