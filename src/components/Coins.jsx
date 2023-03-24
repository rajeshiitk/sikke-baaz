import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol = currency==="inr" ? "₹" : currency==="eur" ? "€" :"$" ;
  const changePage = (page) =>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(10).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {


      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
          setCoins(data);
        setLoading(false);
        
      } catch (error) {
        setError(true);
        setLoading(false);
        
      }
     
    };
    fetchCoins();
  }, [currency,page])


  if(error){
    return <ErrorComponent message={"Error while fetching coins"} />
  }

  return (
    <Container maxW={'container.xl'} >
      {loading ? <Loader /> : <Fragment>
         <RadioGroup value={currency} onChange={setCurrency} padding={['2','4']}  >
         <HStack>
         <Radio value='inr'>INR</Radio>
         <Radio value='usd'>USD</Radio>
         <Radio value='eur'>EUR</Radio>
         </HStack>
         </RadioGroup>
        <HStack wrap={'wrap'} justifyContent={"center"}>
          {coins.map((i) => (
            <CoinCard id={i.id} key={i.id} name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol} />
          ))};
        </HStack>
        <HStack overflowX={'auto'} p={'4'}>
        {
        btns.map((item,index) =>(
          <Button 
          key={index}
          bgColor={'blackAlpha.200'}
          onClick={()=>changePage(index+1)} >
          {index+1}
          </Button>
        ))
        }
       
        </HStack>

      </Fragment>}
    </Container>
  );
};





export default Coins