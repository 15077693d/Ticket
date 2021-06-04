import styled from 'styled-components'

const Table = styled.table`
    border: 1px solid black;
    th, td{
        border: 1px solid black;
    }
`

const Field = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:20px;
`
const Left = styled.div`
  width:200px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  border: 1px black solid;
  width:700px;
  height:300px;
  padding-top:30px;
  box-sizing: border-box;
`

const BarContainer = styled.table`
width: 930px;
border: 1px solid black;
th, td{
    text-align: center;
    border: 1px solid black;
}
margin-bottom: 15px;
`

const Container = styled.div`
width: 930px;
   display: flex;
   height:300px;
  justify-content:space-between;
`
export {Field,Left,Right,Container,Table, BarContainer};