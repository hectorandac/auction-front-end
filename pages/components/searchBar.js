import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import { useState, createRef, useEffect } from 'react'
import { IconButton, makeStyles, useMediaQuery } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
  filterButton: {
    marginRight: '8px',
    backgroundColor: 'white',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
    '&:hover': {
      backgroundColor: 'white'
    }
  }
})

const SearchButton = styled.div`
    width: 44px;
    height: 48px;
    background-color: white;
    margin-left: 4px;
    border-radius: 4px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .1);
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    transition: 0.5s;
    :hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .2)
    }
    :active {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0);
    }
`

const SearchBarContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SearchInput = styled.input`
  width: calc(100% - 48px);
  background-color: #ffffff;
  outline: none;
  border: none;
  height: 100%;
  font-family: raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 100;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, .1);
  border-radius: 4px;
`

const RemoveText = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  right: 56px;
  top: 17px;
  line-height: 14px;
  background-color: lightgray;
  color: gray;
  position: absolute;
  text-align: center;
  vertical-align: middle;
  margin: auto;
  cursor: pointer;
  display: ${ props => props.haveText ? 'show' : 'none' };
`

const SearchSection = styled.div`
  position: absolute;
  top: 51px;
  right: 0;
  left: 0;
  width: 75%;
  max-width: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
  @media (max-width: 600px) {
        width: 95%;
    }
`

const SearchResults = styled.ul`
  margin-top: 4px;
  background-color: white;
  border-radius: 4px;
  height: auto;
  overflow: scroll;
  width: 100%;
  height: ${props => props.height !== undefined ? props.height + 'px' : 0 };
  max-height: 360px;
  z-index: 10;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, ${props => props.hide ? 0 : 0.1});
  list-style-type: none;
  padding-inline-start: 0;
  margin-bottom: -1px;
  transition: 0.3s ease-out;
`

const SearchResult = styled.li`
  position: relative;
  padding: 16px;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${props => props.focused ? '#ECF5FE' : 'white'};
  :nth-child(n+1):nth-last-child(-n+1),
  :nth-child(n+1):nth-last-child(-n+1) ~ li {
    border:none;
  }
  :hover {
    background-color: #ECF5FE;
  }
  :before {
    font-size: 12px;
    content: '${props => props.category}';
    margin-right: 8px;
    background-color: #A9A9A9;
    color: white;
    padding: 4px;
    border-radius: 4px;
  }
  :after {
    opacity: ${props => props.focused ? '1' : '0'};
    color: white;
    transition: 0.5s;
    background: lightgrey;
    direction: ltr;
    display: inline-block;
    font-family: 'Material Icons', Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    border-radius: 4px;
    padding: 2px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    content: "keyboard_return";
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 12px;
  }
`

const scrollToRef = (searchResults, singleResult, fisrtSingleResult) => {
  let searchResultCoordinates = searchResults.getBoundingClientRect();
  let singleResultCoordinates = singleResult.getBoundingClientRect();
  let fisrtSingleResultCoordinates = fisrtSingleResult.getBoundingClientRect();

  let yStartSearchResultCoordinates = searchResultCoordinates.top;
  let yEndSearchResultCoordinates = yStartSearchResultCoordinates + searchResults.offsetHeight;
  
  let outsideTopLimit = singleResultCoordinates.top < yStartSearchResultCoordinates;
  let outsideBottomLimit = (singleResultCoordinates.y + singleResult.offsetHeight) > yEndSearchResultCoordinates;

  // Get if element is inside view
  if( outsideTopLimit || outsideBottomLimit ) {
    let currentY = yStartSearchResultCoordinates - fisrtSingleResultCoordinates.top;
    let visibleForEndPointDelta = singleResultCoordinates.top - yEndSearchResultCoordinates;
    let visibleForStartPointDelta = yStartSearchResultCoordinates - singleResultCoordinates.top;

    if (visibleForEndPointDelta < 0) {
      let moveToDesiredPoint = currentY - visibleForStartPointDelta;
      searchResults.scrollTo(0, moveToDesiredPoint);
    } else {
      let moveToDesiredPoint = currentY + visibleForEndPointDelta + singleResult.offsetHeight;
      searchResults.scrollTo(0, moveToDesiredPoint)
    }
  }
}

const searchField = createRef();
const searchResultsRef = createRef();
export default function SearchBar(props) {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [currentNode, setCurrentNode] = useState(0);
    const customStyles = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    let refs = [];
     
    useKeyPress('ArrowDown', () => handleDownKey(currentNode, setCurrentNode, results, refs, searchResultsRef.current));
    useKeyPress('ArrowUp', () => handleUpKey(currentNode, setCurrentNode, results, refs, searchResultsRef.current));

    return (
      <SearchSection {...props}>
        <SearchBarContainer>
          {props.allowFilter && matches ? filterButton(customStyles) : <></>}
          <SearchInput 
            onKeyDown={(e) => {ignoreKeyPressed(e, 'ArrowUp'); ignoreKeyPressed(e, 'ArrowDown');}}
            onKeyUp={(e) => {ignoreKeyPressed(e, 'ArrowUp'); ignoreKeyPressed(e, 'ArrowDown');}}
            ref={searchField}
            value={search}
            onChange={(t) => handleOnChnage(t.target.value, setSearch, setResults)}
            placeholder="Search for anything"/>
          <SearchButton>
              <SearchIcon />
          </SearchButton>
          <RemoveText align="center"  haveText={search.length > 0} onClick={() => handleOnChnage('', setSearch, setResults)}>×</RemoveText>
        </SearchBarContainer>
        <SearchResults ref={searchResultsRef} hide={results.length == 0} height={results.length * 52} >
          {results.map((r, index) => {
              return <SearchResult ref={node => refs = [...refs, node]} focused={index === currentNode} category={'category'}>{r}</SearchResult>
            }
          )}
        </SearchResults>
      </SearchSection>
    )
}

function filterButton(customStyles) {
  return <IconButton classes={{root: customStyles.filterButton}} variant="contained" color="primary">
    <FilterListIcon/>
  </IconButton>
}

function ignoreKeyPressed(e, key) {
  if (e.key === key) {
    e.preventDefault();
  }
}

function handleUpKey(currentNode, setCurrentNode, results, refs, parent) {
  let tempNode = currentNode - 1
  if(tempNode > -1) {
    setCurrentNode(tempNode)
    scrollToRef(parent, refs[tempNode], refs[0])
  } 
}

function handleDownKey(currentNode, setCurrentNode, results, refs, parent) {
  let tempNode = currentNode + 1
  if(tempNode < results.length) {
    setCurrentNode(tempNode)
    scrollToRef(parent, refs[tempNode], refs[0])
  }
}

function handleOnChnage(value, searchSetter, resultSetter) {
  searchSetter(value)
  if(value.length == 0) {
    resultSetter([])
  } else {
    resultSetter(fetchResults(value))
  }
  if (searchField.current != null) {
    searchField.current.focus();
  }
}

function fetchResults(value) {
  return ["Test result 1", "Test result 2", "Test result 3", "Test result 4", "Test result 5", "Test result 6", "Test result 7", "Test result 8"]
}

export function useKeyPress(targetKey, onPressDown = () => {}, onPressUp = () => {}) {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);

	useEffect(() => {
		// If pressed key is our target key then set to true
		function downHandler({ key }) {
			if (key === targetKey) {
				setKeyPressed(true);
				onPressDown();
			}
		}

		// If released key is our target key then set to false
		const upHandler = ({ key }) => {
			if (key === targetKey) {
				setKeyPressed(false);
				onPressUp();
			}
		};

		// Add event listeners
		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	});

	return keyPressed;
}