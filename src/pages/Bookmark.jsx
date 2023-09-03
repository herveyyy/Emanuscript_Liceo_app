import { Avatar, Typography, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Manuscript Title", "Author", "Date", ""];
 
const TABLE_ROWS = [
  {
    manuscript: "Data Science",
    author: "Khian",
    date: "23/04/18",
  },
  {
    manuscript: "Mathematical Problems",
    author: "Justice",
    date: "23/04/18",
  },
  {
    manuscript: "Good Will of Nature",
    author: "Amor",
    date: "19/09/17",
  },
  {
    manuscript: "The importance of Science",
    author: "Abad",
    date: "24/12/08",
  },
  {
    manuscript: "Information Technology",
    author: "Jas",
    date: "04/10/21",
  },
];

function Bookmark() {
    return ( 
      <div className="flex justify-center">
      <div className="absolute flex justify-center items-center mb-[20rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src="static/images/khian.png" alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>Khian Justice A. Abad</h1>
              <h2>kabad37796@liceo.edu.ph</h2>
          </div>
      </div>
      <div className="flex justify-center items-center mt-[8rem]">
          <div className="bg-red-900 rounded-md">
              <ul className="flex justify-evenly cursor-pointer">
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  <Link to='AccountSettings'>Account</Link>
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  <Link to='Bookmark'>Bookmark</Link>
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  Rated
                </Typography>
                <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
                  History
                </Typography>
              </ul>
          </div>
        <form className="absolute flex justify-center mt-[30rem]">
        <Card className="h-full w-[80rem] overflow-scroll">
        <table className="w-[80rem] min-w-max table-center text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ manuscript, author, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={manuscript}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {manuscript}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {author}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  </form>
</div>
</div>
    );
}

export default Bookmark;