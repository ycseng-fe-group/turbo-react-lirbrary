import{j as n}from"./jsx-runtime-DBhXMc9n.js";import{A as i,B as r}from"./index-DtySvkwu.js";import"./index-yUhCOHB4.js";import"./index-z4ifl892.js";const{useState:f}=__STORYBOOK_MODULE_PREVIEW_API__,y={component:i},o={render:function(s){const[a,e]=f(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{...s,onClick:()=>{e(!0)},children:"헬로"}),n.jsx(i,{"aria-describedby":"alert-dialog-slide-description",footer:n.jsx(r,{onClick:()=>{e(!1)},children:"확인"}),header:"안녕하세요",onClose:()=>{e(!1)},open:a,children:"헬로 월드"})]})},name:"alert",args:{children:"Hello",type:"button",variant:"contained",color:"success",style:{color:"white",border:"1px solid gray",padding:10,borderRadius:10}}},t={render:function(s){const[a,e]=f(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{...s,onClick:()=>{e(!0)},children:"confirm"}),n.jsx(i,{"aria-describedby":"alert-dialog-slide-description",footer:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{e(!1)},children:"확인"}),n.jsx(r,{onClick:()=>{e(!1)},children:"취소"})]}),header:"안녕하세요",keepMounted:!0,onClose:()=>{e(!1)},open:a,children:"Hello Confirm"})]})},name:"confirm",args:{children:"Hello",type:"button",variant:"contained",color:"inherit",style:{color:"black",border:"1px solid gray",padding:10,borderRadius:10}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <BasicButton {...props} onClick={() => {
        setOpen(true);
      }}>
          헬로
        </BasicButton>
        <Alert aria-describedby="alert-dialog-slide-description" footer={<BasicButton onClick={() => {
        setOpen(false);
      }}>
              확인
            </BasicButton>} header="안녕하세요" onClose={() => {
        setOpen(false);
      }} open={open}>
          헬로 월드
        </Alert>
      </>;
  },
  name: "alert",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
    color: "success",
    style: {
      color: "white",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <BasicButton {...props} onClick={() => {
        setOpen(true);
      }}>
          confirm
        </BasicButton>
        <Alert aria-describedby="alert-dialog-slide-description" footer={<>
              <BasicButton onClick={() => {
          setOpen(false);
        }}>
                확인
              </BasicButton>
              <BasicButton onClick={() => {
          setOpen(false);
        }}>
                취소
              </BasicButton>
            </>} header="안녕하세요" keepMounted onClose={() => {
        setOpen(false);
      }} open={open}>
          Hello Confirm
        </Alert>
      </>;
  },
  name: "confirm",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained",
    color: "inherit",
    style: {
      color: "black",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const C=["Primary","Confirm"];export{t as Confirm,o as Primary,C as __namedExportsOrder,y as default};
