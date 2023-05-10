import { Collapse, List, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import NoteListCard from "./NoteListCard";

export default function NoteList() {
    const list = [1, 2];

    return (
        <>
            <Typography variant="h4" component="h2">
                Note List
            </Typography>

            <List>
                <TransitionGroup>
                    {list.map((_, i) => (
                        // Avoiding "Cannot read properties of null (reading 'scrollTop') Material UI bug"
                        // by adding div
                        <Collapse key={i}>
                            <div>
                                <NoteListCard />
                            </div>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </>
    );
}
