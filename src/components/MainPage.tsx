import React from 'react';
// import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';
import CounterButton from './CounterButton';
import Scroll from './Scroll';
import Loading from './Loading';

// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import CardList from './CardList';

// const useStyles = makeStyles((theme) => ({
//     // paper: {
//     //     padding: theme.spacing(2),
//     //     textAlign: 'center',
//     //     color: theme.palette.text.secondary,
//     // },
// }));

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //     };
    // }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        // const { robots } = this.state;
        const { onSearchChange, robots, isPending } = this.props;

        // if (isPending) {
        //     return <Typography variant="h6">Loading..</Typography>;
        // }

        return (
            // <Container maxWidth="xl">
            <div>
                <Box align="center" margin={3}>
                    <Header />
                    <CounterButton />
                    <SearchBox searchChange={onSearchChange} />
                </Box>

                <Scroll>
                    {isPending ? (
                        <Loading />
                    ) : (
                        <ErrorBoundry>
                            <CardList arr={this.filteredRobots()} />
                        </ErrorBoundry>
                    )}
                </Scroll>
            </div>
            // </Container>
        );
    }
}

export default App;
