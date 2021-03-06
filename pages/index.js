import styles from '../styles/Home.module.css'
import { MenuBar } from './components/menuBar'
import styled from 'styled-components'
import SearchBar from './components/searchBar';
import TrendyAuction from './components/trendyAuction'
import RecentAuctions from './components/recentAuctions';
import { useState, useEffect, useRef } from 'react'
import CategoriesShowcase from './components/categoriesShowcase';
import Presentation from './components/presentation';
import Link from 'next/link';
import CanDo from './components/canDo';
import SocialButtons from './components/socialButtons';

const SearchContainer = styled.div`
  height: 480px;
  background-color: #ECF5FE;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    height: 340px;
  }
`

const SelectionTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Tab = styled.h4`
    padding: 0 8px;
    margin-bottom: 0;
    transition: .5s;
    cursor: pointer;
    color: ${props => props.selected ? 'black' : 'lightgrey'};
`

export default function Home() {
  const [tabSelection, setTabSelection] = useState(true);
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-100px');

  return (
    <MenuBar positon={'home'} viewSearch={!onScreen}>
      <div className={styles.container} style={{marginTop: "72px"}}>
        <main>
          <SearchContainer ref={ref} >
            <svg style={{ position: "absolute", top: "0", zIndex: '0' }} viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg">
              <path fill="#540D6E10" d="M40,-69.1C53,-61.8,65.6,-53.4,68.4,-41.8C71.3,-30.1,64.5,-15,64.9,0.3C65.4,15.6,73.1,31.1,70.7,43.5C68.2,56,55.6,65.2,42.2,68.7C28.7,72.2,14.3,69.9,1.1,68C-12.1,66.1,-24.2,64.5,-35.8,59.9C-47.3,55.3,-58.4,47.7,-62.3,37.2C-66.2,26.7,-63.1,13.4,-61.4,1C-59.8,-11.4,-59.6,-22.9,-54.1,-30.7C-48.7,-38.6,-38,-42.9,-28.1,-52C-18.2,-61.1,-9.1,-75,2.2,-78.8C13.5,-82.6,27,-76.4,40,-69.1Z" transform="translate(0 50)" />
              <path fill="#540D6E10" d="M34.8,-59.2C48.6,-52.3,65.6,-50,69.8,-40.9C73.9,-31.8,65.1,-15.9,61.4,-2.2C57.6,11.6,59,23.2,56.1,34.5C53.3,45.9,46.3,57,36.2,58.6C26.2,60.3,13.1,52.5,-0.8,53.8C-14.6,55.1,-29.2,65.5,-40.6,64.6C-52,63.7,-60.2,51.6,-69.3,39C-78.4,26.3,-88.4,13.2,-87.7,0.4C-87,-12.4,-75.6,-24.7,-63.8,-32.7C-52,-40.6,-39.7,-44.1,-29,-52.8C-18.3,-61.5,-9.2,-75.4,0.7,-76.5C10.5,-77.7,21,-66.1,34.8,-59.2Z" transform="translate(10 50)" />
              <path fill="#540D6E10" d="M39.1,-62.1C51.2,-60.6,62.1,-51.4,71.9,-39.7C81.7,-28.1,90.5,-14,89.5,-0.5C88.6,13,77.9,25.9,66,33.8C54,41.7,40.7,44.6,29.5,47.6C18.3,50.5,9.1,53.6,-2.3,57.6C-13.8,61.6,-27.5,66.6,-37.8,63C-48,59.5,-54.8,47.5,-58.7,35.6C-62.7,23.7,-63.9,11.8,-64.9,-0.6C-65.9,-13,-66.7,-26,-63.5,-39.2C-60.3,-52.4,-53,-65.8,-41.7,-67.7C-30.5,-69.6,-15.2,-60.1,-0.9,-58.6C13.4,-57.1,26.9,-63.5,39.1,-62.1Z" transform="translate(200 100)" />
              <path fill="#540D6E10" d="M39,-69.9C50.4,-60.9,59.4,-50.2,59.6,-38.3C59.9,-26.3,51.3,-13.2,51.2,-0.1C51,13,59.3,26,59.2,38.1C59,50.3,50.5,61.5,39.3,66.8C28,72.2,14,71.6,-0.8,73.1C-15.7,74.5,-31.4,78,-45.7,74.4C-60,70.9,-72.9,60.2,-78,46.6C-83.1,33.1,-80.4,16.5,-71.5,5.1C-62.6,-6.3,-47.7,-12.6,-38.7,-19.5C-29.8,-26.4,-26.8,-33.9,-21.4,-46.3C-15.9,-58.8,-8,-76.1,2.9,-81.1C13.8,-86.2,27.6,-78.9,39,-69.9Z" transform="translate(200 100)" />
              <path fill="#540D6E10" d="M30.5,-59.4C36.6,-49.4,36.6,-35.2,39.4,-24.6C42.2,-14.1,47.9,-7,50.7,1.6C53.5,10.2,53.3,20.5,51.4,32.6C49.5,44.8,45.8,58.8,36.9,60.7C28.1,62.6,14,52.3,-1.1,54.2C-16.2,56,-32.3,70,-38.2,66.4C-44.2,62.8,-39.9,41.7,-48.5,27.7C-57,13.7,-78.5,6.8,-83.4,-2.8C-88.2,-12.5,-76.5,-24.9,-66.4,-36.3C-56.3,-47.7,-47.9,-58,-37.1,-65.4C-26.3,-72.7,-13.2,-77.1,-0.5,-76.3C12.2,-75.5,24.4,-69.5,30.5,-59.4Z" transform="translate(100 200)" />
              <path fill="#540D6E10" d="M28.3,-47.9C39.7,-42.5,54.1,-41,63,-33.7C71.9,-26.3,75.4,-13.2,72.9,-1.5C70.4,10.3,61.8,20.5,53.2,28.4C44.6,36.2,35.9,41.7,27,45.7C18.2,49.6,9.1,52,-1.8,55C-12.6,58.1,-25.2,61.8,-36,59C-46.8,56.1,-55.7,46.7,-58.1,35.8C-60.5,24.9,-56.4,12.4,-54.5,1.1C-52.7,-10.3,-53.1,-20.6,-47.6,-26.1C-42,-31.6,-30.5,-32.2,-21.6,-39C-12.7,-45.7,-6.3,-58.6,1.1,-60.5C8.5,-62.3,17,-53.2,28.3,-47.9Z" transform="translate(70 200)" />
            </svg>
            <Presentation />
          </SearchContainer>
          <SearchBar/>

          <TrendyAuction />
          <SelectionTab>
            <Tab selected={tabSelection} onClick={() => {setTabSelection(true)}}>Ending soon</Tab>
            <Tab selected={!tabSelection} onClick={() => {setTabSelection(false)}}>Newly added</Tab>
          </SelectionTab>
          <RecentAuctions />
          <CanDo />
          <CategoriesShowcase />
          <Link href="/"><h1 style={{ fontFamily: "'Raleway', sans-serif", color: "#035263", cursor: "pointer", textAlign: 'center', fontWeight: '100', fontSize: '32px' }}>GoPostor</h1></Link>
          <SocialButtons/>

        </main>
      </div>
    </MenuBar>
  )
}

// Hook
function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
