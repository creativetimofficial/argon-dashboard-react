import React, {useState, useEffect} from "react";
import Header from "components/Headers/Header.js";
import axios from "axios";
import useInput from "hooks/useInput";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

import * as S from "./style";
import {
  Badge,
  Card,Col,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  NavLink,
  Table,
  Container,
  Row,Button,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

const StoreEdit = ( props ) => {
console.log(props.location.state.data);

const [data, setData] = useState(props.location.state.data);
//const [data, setData] = useState([]);
  const [loading, setLoading ]=useState(false);
  const [error, setError] = useState(null);
  
  const [brands, setBrands]=useState([]);
    
  useEffect(()=>{
    const fetchData = async () =>{
        try {
            setError(null);
            setLoading(true);
            
            const response = await axios.get("/stores/brand");
            setBrands(response.data.result);

        } catch (e){
            setError(e);
        }
        setLoading(false);
    };
    
    fetchData();
},[]);

const onDrop= event =>{
  const value = (event.target.value);
  console.log(value);
  setBr(value);

}

const onTime= event =>{
  const value = (event.target.value);
  console.log(value);
  setST(value);
}

const onETime= event =>{
  const value = (event.target.value);
  console.log(value);
  setET(value);
}
const handleSelect= event=>{
  
  const value = (event.target.value);
  if(event.target.name=="fss")
    setFss(value);
  else if(event.target.name=="ss")
    setSs(value);
  else if(event.target.name=="ps")
    setPs(value);
  else if(event.target.name=="lhs")
    setLhs(value);
  else if(event.target.name=="gs")
    setGs(value);
  else if(event.target.name=="ls")
    setLs(value);
  else if(event.target.name=="rs")
    setRs(value);
  else if(event.target.name=="cs")
    setCs(value);
}
  const [nm, onChangeNm, setNm] = useInput(data.storeName);
  const [inf, onChangeInf, setInf] =useInput(data.storeInfo);
  const [pn, onChangePn, setPn] =useInput(data.storePhoneNumber);
  const[bc, onChangeBc, setBc] =useInput(data.batCount);
  const [br, setBr] =useState(data.storeBrand);
  const str = data.storeTime.split(" ");
  if(str[2].split(":")[0]==24){
   str[2]="00:"+str[2].split(":")[1];
  }
  const [startTime, setST] =useState(str[0]);
  const [endTime, setET] =useState(str[2]);
  const [fss, setFss] =useState(data.floorScreenStatus);
  const [ss, setSs] =useState(data.storageStatus);
  const [ps, setPs] =useState(data.parkingStatus);
  const [lhs, setLhs] =useState(data.lefthandStatus);
  const [gs, setGs] =useState(data.groupSeatStatus);
  const [ls, setLs] =useState(data.lessonStatus);
  const [rs, setRs] =useState(data.reserveStatus);
  const [cs, setCs] =useState(data.couponStatus);


  const [lc, onChangeLc, setLc] =useInput(data.storeLocation);
 
const onSubmit =event =>{
 const newData= {
    "storeName": nm,
    "storeInfo": inf,
    "storePhoneNumber": pn,
    "storeBrand": br,
    "storeLocation": lc,
    "mainStoreImage": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=b9cSTIZa5Tb1y2Bpz1Wpjg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=92.90503&pitch=0&thumbfov=100",
    "storeImage": [],
    "storeTime": startTime+" ~ "+endTime,
    "batCount": bc,
    "lefthandStatus": lhs,
    "parkingStatus": ps,
    "groupSeatStatus": gs,
    "floorScreenStatus": fss,
    "storageStatus": ss,
    "lessonStatus": ls,
    "reserveStatus": rs,
    "couponStatus": cs
}
try{

  axios.post('/partner/register', newData).then(response => {
  console.log(response);
      
  });
}catch(e){
  console.log(e);
}


}

  return (
    <>
      <Header />
      {/* Page content */}
      <br/> <br/> <br/> <br/> <br/> <br/>
      <Container className="mt--7" fluid>
        {/* Table */}
       <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">매장 정보</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>

                <thead className="thead-light">
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col"> </th>
                  
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <th scope="row">
                      <Media className="align-items-center">
      
                          <span className="mb-0 text-sm">
                            매장 이름
                          </span>
                      </Media>
                    </th>
                    <td> 
                    <Input
                            className="form-control-alternative"
                            type="text"
                            onChange={onChangeNm}
                            value={nm}
                          />
                       </td>
                    
                  </tr>
                  <tr>

                <th scope="row">
                  <Media className="align-items-center">
                  
                    <Media>
                      <span className="mb-0 text-sm">
                        매장 사진
                      </span>
                    </Media>
                  </Media>
                </th>
                <td> <img src={data.mainStoreImage}/> </td>

                </tr>

                <tr>

<th scope="row">
  <Media className="align-items-center">
   
    <Media>
      <span className="mb-0 text-sm">
       매장 소개
      </span>
    </Media>
  </Media>
</th>
<td>
<Input
                        className="form-control-alternative"
                        rows="4"
                        value={inf}
                        onChange={onChangeInf}
                        type="textarea"
                      /> </td>

</tr>





   <tr>

                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            전화번호
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                    <Input
                            className="form-control-alternative"
                            type="tel"
                            required
                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
                            maxlength="11"
                            onChange={onChangePn}
                            value={pn}
                          /> </td>
                    
                  </tr>
                     <tr>

                    <th scope="row">
                      <Media className="align-items-center">
                       
                        <Media>
                          <span className="mb-0 text-sm">
                           주소
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td> <Input
                            className="form-control-alternative"
                            type="text"
                            onChange={onChangeLc}
                            value={lc}
                          /> </td>
                    
                  </tr>
                  <tr>

<th scope="row">
  <Media className="align-items-center">
   
    <Media>
      <span className="mb-0 text-sm">
       브랜드
      </span>
    </Media>
  </Media>
</th>
<td>


<UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-secondary dropdown-toggle"
                    role="button"
                    type="button"
                    data-toggle="dropdown"
                    
                    >
                    {br? <a>{br}</a>:<a>브랜드 선택</a>}
                    <i className="fas fa-ellipsis-v" />
                  </DropdownToggle>
                  <DropdownMenu
                  className="dropdown-menu-arrow" right

                  >
                  {brands.map(b=><DropdownItem
 value={b.brandName}
 onClick={e => onDrop(e)}

 >{b.brandName}</DropdownItem>)}
</DropdownMenu>
                </UncontrolledDropdown>

                           </td>

</tr>

<tr>

<th scope="row">
      <span className="mb-0 text-sm">
        운영시간
      </span>

</th>
<td>
<input 
className="btn btn-secondary btn-lg"
type="time"
value={startTime} 
onChange={e=>onTime(e)}
/>
<input 
className="btn btn-secondary btn-lg"
type="time"
value={endTime} 
onChange={e=>onETime(e)}
/>
   </td>

</tr>

<tr>

<th scope="row">
  <Media className="align-items-center">
   
    <Media>
      <span className="mb-0 text-sm">
       타석 수
      </span>
    </Media>
  </Media>
</th>
<td>  <Input
                            className="form-control-alternative"
                            type="number"
                            onChange={onChangeBc}
                            value={bc}
                          /> </td>

</tr>
<tr >

<th scope="row">
   
      <span className="mb-0 text-sm">
       편의 시설
      </span>
</th>
<td> 
   </td>
</tr>

<tr >
<th scope="row">
   
      <span className="mb-0">
       바닥 스크린
      </span>
   
</th>
<td>
    <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="fss"
           defaultChecked={fss===true?true:false}
           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="fss"
           defaultChecked={fss===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer>

</td>
   </tr>


   <tr >
<th scope="row">
      <span className="mb-0">
      장비 보관 
      </span>
</th>
  <td>  <S.ReserveStatusContainer>                     
  <S.RadioButton
            type="radio"
             value="true"
             name="ss"
             onChange={e=>handleSelect(e)}
             defaultChecked={ss===true?true:false}

             />
             <h3>O</h3>
               
             <S.RadioButton
            type="radio"
             value="false"
             name="ss"
             defaultChecked={ss===false?true:false}
             onChange={e=>handleSelect(e)}     
                   /><h3>X</h3>         
  </S.ReserveStatusContainer>
  </td>
   </tr>

   <tr >
<th scope="row">
      <span className="mb-0">
      주차 시설
      </span>
</th>
  <td> 
  <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="ps"
           defaultChecked={ps===true?true:false}

           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="ps"
           defaultChecked={ps===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer></td> 
   </tr>

   <tr >
<th scope="row">
      <span className="mb-0">
     왼손 전용
      </span>
</th> <td> 
  <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="lhs"
           defaultChecked={lhs===true?true:false}
           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="lhs"
           defaultChecked={lhs===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer></td> 
   </tr>

   <tr >
<th scope="row">
      <span className="mb-0">
      그룹 석 
      </span>
</th><td> 
  <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="gs"
           defaultChecked={gs===true?true:false}

           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="gs"
           defaultChecked={gs===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer></td></tr>
<tr>
<th scope="row">
      <span className="mb-0">
      레슨 제공
      </span>
</th>
  <td> <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="ls"
           defaultChecked={ls===true?true:false}

           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="ls"
           defaultChecked={ls===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer> </td>  
   </tr>
   <tr >
<th scope="row">
      <span className="mb-0 text-sm">
      예약 가능 여부 
      </span>
</th>
  <td> 
    <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="rs"
           defaultChecked={rs===true?true:false}
           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="rs"
           defaultChecked={rs===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer>
</td>  
   </tr>
   <tr >
<th scope="row">
      <span className="mb-0 text-sm">
  쿠폰 여부
      </span>
</th>
  <td> 
    <S.ReserveStatusContainer>                     
<S.RadioButton
          type="radio"
           value="true"
           name="cs"
           defaultChecked={cs===true?true:false}
           onChange={e=>handleSelect(e)}
           />
           <h3>O</h3>
             
           <S.RadioButton
          type="radio"
           value="false"
           name="cs"
           defaultChecked={cs===false?true:false}
           onChange={e=>handleSelect(e)}     
                 /><h3>X</h3>         
</S.ReserveStatusContainer></td>
   </tr>
 


                  
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        
        
       
        
   <br/>
   <NavLink
             to=
             {{
               pathname:"/admin/store"
              }}
             tag={NavLinkRRD}
             activeClassName="active"
             onClick={e=>onSubmit(e)}
          >  
        <Button 
                color="info"

                >
               수정 완료
              </Button>
             </NavLink>
      </Container>
    </>
  );
};

export default StoreEdit;
