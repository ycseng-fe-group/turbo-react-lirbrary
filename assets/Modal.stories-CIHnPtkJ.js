import{j as n}from"./jsx-runtime-DBhXMc9n.js";import{a as s,u as l,B as u}from"./index-DtySvkwu.js";import"./index-yUhCOHB4.js";import"./index-z4ifl892.js";const g={component:s,argTypes:{dataSource:{name:"Basic Modal Storybook",title:"Modal Test",content:n.jsx("div",{})},options:{isUseHeader:!0,isUseButton:!0,isBackgroundHandle:!0,contentWidth:800,customizeStyles:{}}}},e={render:function(r){const{setModalOpen:d,setTargetModalName:i}=l(),c=()=>{i("Basic Modal Storybook"),d(!0)};return n.jsxs(n.Fragment,{children:[n.jsx(u,{onClick:c,variant:"contained",children:"모달 버튼"}),n.jsx(s,{...r})]})},name:"Modal",args:{dataSource:{name:"Basic Modal Storybook",title:"Modal Test",content:n.jsx("div",{})},options:{isUseHeader:!0,isUseButton:!0,isBackgroundHandle:!0,contentWidth:800,customizeStyles:{}}}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render(props) {
    const {
      setModalOpen,
      setTargetModalName
    } = useBasicModalFunctions();
    const handleOpenModal = (): void => {
      setTargetModalName("Basic Modal Storybook");
      setModalOpen(true);
    };
    return <>
        <BasicButton onClick={handleOpenModal} variant="contained">
          모달 버튼
        </BasicButton>
        <BasicModal {...props} />
      </>;
  },
  name: "Modal",
  args: {
    dataSource: {
      name: "Basic Modal Storybook",
      title: "Modal Test",
      content: <div />
    },
    options: {
      isUseHeader: true,
      isUseButton: true,
      isBackgroundHandle: true,
      contentWidth: 800,
      customizeStyles: {}
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const y=["Primary"];export{e as Primary,y as __namedExportsOrder,g as default};
