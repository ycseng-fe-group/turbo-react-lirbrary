import{j as e}from"./jsx-runtime-DBhXMc9n.js";import{B as o,A as c}from"./index-DtySvkwu.js";import"./index-yUhCOHB4.js";import"./index-z4ifl892.js";const{useState:p}=__STORYBOOK_MODULE_PREVIEW_API__,O={component:o,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},t={render:function(i){const[l,n]=p(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...i,onClick:()=>{n(!0)},children:"Hello"}),e.jsx(c,{"aria-describedby":"alert-dialog-slide-description",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>{n(!1)},children:"확인"}),e.jsx(o,{onClick:()=>{n(!1)},children:"취소"})]}),header:"확인",keepMounted:!0,onClose:()=>{n(!1)},open:l,children:"터보레포 월드!"})]})},name:"Button",args:{children:"Hello",type:"button",variant:"contained"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: function Render(props) {
    const [open, setOpen] = useState(false);
    return <>
        <BasicButton {...props} onClick={() => {
        setOpen(true);
      }}>
          Hello
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
            </>} header="확인" keepMounted onClose={() => {
        setOpen(false);
      }} open={open}>
          터보레포 월드!
        </Alert>
      </>;
  },
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    variant: "contained"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const h=["Primary"];export{t as Primary,h as __namedExportsOrder,O as default};
