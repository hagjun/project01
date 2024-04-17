import { Container, List, ListItem } from "@mui/material";
import React , {Component}from "react";
import BookListItem from "./BookListItem";

class BookList extends Component{
    render(){

        // const books = this.props.books ;
        
        // 구조 분해 할당
        const {books} = this.props;
        // map을 사용해서 하나씩 끄집어내서
        const bookItems = books.map((k)=>{
            return(
                <ListItem>
                    <BookListItem book={k} />                   
                </ListItem>
            )
        })
        // return(
        //     <List>
        //         <ListItem> Item01 </ListItem>
        //         <ListItem> Item02 </ListItem>
        //         <ListItem> Item03 </ListItem>
        //     </List>
        // )
        return(
            /* maxWidth='sm' : 너비 지정해주는 것 */
           <Container maxWidth='sm'>
                <List>
                    {bookItems}
                </List>
            </Container> 
        )
    }
}
export default BookList;