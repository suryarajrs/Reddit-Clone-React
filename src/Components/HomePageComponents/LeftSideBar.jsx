import { Divider, Stack } from "@mui/material";
import Menubar from "./SearchMenu/Menubar";
import SearchFeedBar from "./SearchMenu/SearchFeedBar";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FeedContainer from "./FeedContainer.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { fetchApi } from "../../fetch/fetchApi";
import { useSelector } from "react-redux";
import { addInfiniteScroll, fetchPostDetails } from '../../action';
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader.jsx";











const LeftSideBar = () => {
    const [loading, setLoading] = useState(false);
    const login = useSelector((store) =>store.isLoggedIn)
    const popularTab = useSelector((store) =>store.popularTab)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);

    const postData = useSelector((store) => store.posts);
    // console.log(postData);
    // console.log("page:" + page)


    useEffect(() => {



        if (page <= 6) {
            const fetch = async () => {
                setLoading(true);
                const data = await fetchApi(page)
                //  console.log(data)
                setLoading(false);
                dispatch(addInfiniteScroll(data))
            }
            fetch()
        }


    }, [page])



    useEffect(() => {

        const fetch = async () => {
            const data = await fetchApi(page)
            dispatch(fetchPostDetails(data))
        }
        fetch()



    }, [])

    const handleinfiniteScroll = () => {
        // console.log("scrollHeight:" + document.documentElement.scrollHeight)
        // console.log("scrollTop:"+ document.documentElement.scrollTop)
        // console.log("innerheight:" + window.innerHeight)
        const top = (document.documentElement&&document.documentElement.scrollTop)|| document.body.scrollTop
 

        if (window.innerHeight + top + 1 >= document.documentElement.scrollHeight) {
            console.log("called")
            setPage((prev) => prev + 1)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleinfiniteScroll)

        return () => window.removeEventListener("scroll", handleinfiniteScroll)
    }, [page])


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',

    }));


    return (
        <>
            <Stack spacing={login?2:0} mt={popularTab? "0px": "65px"}  >
                <Item  >

                    {login &&<SearchFeedBar></SearchFeedBar>}
                </Item>

                <Item>

                    { login &&<Menubar></Menubar>}
                </Item>


                {postData?.map((feeddata, i) => {
                    return (

                        <Item key={i} >


                            <FeedContainer post={feeddata}></FeedContainer>
                            {login||<Divider variant="middle"></Divider>}


                        </Item>



                    )
                })}

                {loading&&<Loader></Loader>}




            </Stack>
        </>
    )
}

export default LeftSideBar