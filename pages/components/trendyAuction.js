import { useEffect, useState } from "react"
import styled from "styled-components"
import Api from "./api"
import Chip from '@material-ui/core/Chip';
import { Button, makeStyles } from "@material-ui/core";
import Countdown from 'react-countdown';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles({
    chip: {
        backgroundColor: "#ECF5FE",
        color: '#035263',
        ["@media (max-width:600px)"]: {
            fontSize: '10px',
            height: '22px'
        }
    },
    chipMoney: {
        marginTop: '8px',
        backgroundColor: "#E8EFE6",
        color: '#035263',
        ["@media (max-width:600px)"]: {
            fontSize: '10px',
            height: '22px'
        }
    },
    icon: {
        ["@media (max-width:600px)"]: {
            fontSize: '14px'
        }
    }
  });

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
    position: relative;
`

const TrendyAuctionContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 768px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    @media (max-width: 600px) {
        width: 80%;
    }
`

const TrendyImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    padding: 32px;
    width: 50%;
    height: 400px;
    @media (max-width: 600px) {
        width: 40%;
        height: 170px;
    }
`

const TrendyImage = styled.img`
    height: 88%;
`

const TrendyAuctionDetail = styled.div`
    margin: 0 16px;
    width: calc(50% - 32px);
    @media (max-width: 600px) {
        width: calc(100% - 32px);
    }
`

const Title = styled.h3`
    font-weight: bold;
    @media (max-width: 600px) {
        font-size: 14px;
    }
`

const Details = styled.p`
    @media (max-width: 600px) {
        font-size: 12px;
    }
`

const TrendyText = styled.h3`
    position: absolute;
    top: -16px;
    left: -8px;
    font-weight: bold;
    font-family: 'Raleway', serif;
    @media (min-width: 600px) {
        font-size: 36px;
        left: 16px;
        top: -48px;
    }
`

export default function TrendyAuction() {
    const [itemImage, setItemImage] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemAuctionEndDate, setItemAuctionEndDate] = useState(Date.now())
    const [itemDetails, setItemDetails] = useState('')
    const [highestBid, setHighestBid] = useState(0.0)

    useEffect(() => {
        fetchTrendyItem((trendyItem) => {
            setItemImage(trendyItem.images[0]) 
            setItemName(trendyItem.title)
            setItemAuctionEndDate(trendyItem.auction_closes_at)
            setItemDetails(trendyItem.details.substring(0, 70) + "...")
            setHighestBid(trendyItem.highest_bid)
        })
    }, []);

    const customStyle = useStyles()

    return (
        <Main>
            <TrendyAuctionContainer>
                <TrendyText>Trending<br/>now</TrendyText>
                <TrendyImageContainer>
                    <TrendyImage src={itemImage} />
                </TrendyImageContainer>
                <TrendyAuctionDetail>
                    <Title>{itemName}</Title>
                    <Chip icon={<TimerIcon classes={{root: customStyle.icon}} />} classes={{root: customStyle.chip}} label={<Countdown date={itemAuctionEndDate} />} color="primary" /><br/>
                    <Chip icon={<MonetizationOnIcon classes={{root: customStyle.icon}} />} classes={{root: customStyle.chipMoney}} label={highestBid} color="primary" />
                    <Details>
                        {itemDetails}
                    </Details>
                    <Button color="secondary">View auction</Button>
                </TrendyAuctionDetail>
            </TrendyAuctionContainer>
        </Main>
    )
}

async function fetchTrendyItem(onSuccess) {
    await Api.axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/products/trendy`).then(function (response) {
        onSuccess(response.data);
    }).catch(function (error) {
        console.log(error)
    });
}