"use client"
import { CircularProgress, ImageList,ImageListItem,Stack } from '@mui/material';
import Button from '@mui/material/Button';


const Twitch = () => {
     // const itemData:Array<{img:string,cols:number,rows:number}> =[
     //      {

     //      }
     // ]
  return (<>
     <Button variant="contained">Hello World</Button>
     <br />
          <Stack
     direction={{ xs: 'column', sm: 'row' }}
     spacing={{ xs: 1, sm: 2, md: 4 }}
     >
          <CircularProgress />
          <Button variant="contained">Hello World</Button>
          <Button variant="contained">Hello World</Button>
          <Button variant="contained">Hello World</Button>
     </Stack>

     </>
  )
}
export default Twitch



