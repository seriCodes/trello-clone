import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {v1 as uuidv1} from "uuid";
 
import {Button} from "./common/Button";
import {AddCardModal} from "./AddCardModal";
import {AddListModal} from "./AddListModal";
import {CardModal} from "./CardModal";
import {ModalStyler} from './ModalStyler';


let renderCounts=1

const itemsFromBackend = [ //an array of objects
    { id: uuidv1(), modalId:uuidv1(), content: "First task" },
    { id: uuidv1(), modalId:uuidv1(), content: "Second task" },
    { id: uuidv1(), modalId:uuidv1(), content: "Third task" },
    { id: uuidv1(), modalId:uuidv1(), content: "Fourth task" },
    { id: uuidv1(), modalId:uuidv1(), content: "6 task" },
    { id: uuidv1(), modalId:uuidv1(), content: "7 task" },
    { id: uuidv1(), modalId:uuidv1(), content: "8 task" },
  ];
  // console.log('itemsFromBackend', itemsFromBackend)
   

  const columnsFromBackend = { //an object of objects 
    [uuidv1()]: {
      id:uuidv1(),
      name: "Requested",
      items: itemsFromBackend
    },
    [uuidv1()]: {
      id:uuidv1(),
      name: "To do",
      items: []
    },
    [uuidv1()]: {
      id:uuidv1(),
      name: "In Progress",
      items: []
    },
    [uuidv1()]: {
      id:uuidv1(),
      name: "Done",
      items: []
    },
    
  };

  const listsContainer = {}

  // const listsContainer={
  //   [uuidv1()]: {
  //     position: 1,
  //     list: 
  //     // columnsFromBackend[this.bind.position]
  //     function() {

  //       return columnsFromBackend[this.bind.position]
  //     } 
  //   },
  // }

  // const listsContainer=[...columnsFromBackend ]
 
  // const listsContainer=[]

  console.log('columnsFromBackend before compo')

  console.log(columnsFromBackend)

  let  listContainerId
  Object.entries(columnsFromBackend).forEach(([key, list],index)=>{
    // current[3]=uuidv1()
    // listsContainer.push(list)
    listContainerId=uuidv1()
    listsContainer[listContainerId]=list 
  })
  console.log('listsContainer before compo') 
  console.log(listsContainer)

  //[uuidv1()] must be inside an array to be a propery name



 const onDragEndList = (result, lists, setLists, tasksSubjectsObject, settasksSubjectsObject, render1,setRender1) => {
   console.log('tasksSubjectsObject handler')
   console.log(tasksSubjectsObject)
   console.log('setTasks handler')
   console.log(settasksSubjectsObject)
   console.log('result handler')
   console.log(result)

   console.log('lists state handler')
   console.log(lists)


   if (!result.destination) return;

  const { source, destination } = result;


  console.log('result')
  console.log(result)

  console.log(lists)
  console.log(setLists)
  
  console.log(destination)

  console.log(source)
if(result.type=='List'){
  let destinationListRef= lists[destination.droppableId];

  let sourceListRef= lists[source.droppableId];
  
  setLists({
    ...lists,
    [source.droppableId]: {
      ...destinationListRef
    },
    [destination.droppableId]: {
      ...sourceListRef
    } 
  })
  
  console.log('onDragEndList clic')
  
}

if(result.type=='card'){
  let itemDragged;

console.log('in card drag')
Object.entries(tasksSubjectsObject).map(([key,itemsWrraperObj])=>{
  if(itemsWrraperObj.id==source.droppableId){

    itemsWrraperObj.items.map((task,index,arr)=>{
        if(task.id==result.draggableId){
          console.log('task found', JSON.stringify(task) )
          itemDragged= task
          arr.splice(index, 1)//deletes old task from current array
          console.log('arr.splice index',index) 
          console.log('arr.splice task found', JSON.stringify(arr) )
        }
    })
  }

})
Object.entries(tasksSubjectsObject).map(([key,itemsWrraperObj])=>{
  if(itemsWrraperObj.id==destination.droppableId){
    console.log('task insersion', JSON.stringify(itemsWrraperObj.items) )
    
    itemsWrraperObj.items.splice(destination.index,0,itemDragged)

    // itemsWrraperObj.items.map((task,index,arr)=>{
    //     if(task.id==result.draggableId){
    //       console.log('task found', JSON.stringify(task) )
    //       itemDragged= task
    //       arr.splice(index, 1)//deletes old task from current array
    //       console.log('arr.splice index',index) 
    //       console.log('arr.splice task found', JSON.stringify(arr) )
    //     }
    // })

  }

}) 
setRender1(!render1) 
}

  }
//Object.entries(columns) key is [uuidv1()]. the value is the object . it retruns : 



export const ListsContainer = () => {
console.log('columnsFromBackend fm comp')
console.log(columnsFromBackend)
console.log('listsContainer fm comp')
console.log(listsContainer) 

const ModalStylerObj= new ModalStyler()


    const [tasksObjectContainer, settasksObjectContainer] = useState(columnsFromBackend);
    const [lists, setLists] = useState(listsContainer);
    const [render1, setrender1] = useState(true);
    const [renderAddList, setrenderAddList] = useState(true);

    const [cardEdit, setCardEdit] = useState({id: "", content: ""});


    console.log('lists state')
    console.log(JSON.stringify(lists))
    console.log('tasksObjectContainer state')
    console.log(JSON.stringify(tasksObjectContainer))

 
const addcard=(listId)=>{
  console.log(listId)
  // alert(listId)
let listPicked=document.getElementById(listId)

Object.entries(lists).map(([key,list],index)=>{
  if(listId==list.id){
console.log('listId==list.id')
    list.items.push({ 
      id: uuidv1(), modalId:uuidv1(), content: listPicked.value
   })
  // console.log('render1 event',list)
   setrender1(!render1)
  }
})

}

const editTitle=(card, title)=>{
    // alert(title)
    // alert(card)
    card.content=title
    setrender1(!render1)

}

const addList=()=>{
  // alert('addList')
  console.log('listsContainer addList()')
  console.log(listsContainer)
let title=document.getElementById("addList").value;

console.log('title', title)
let newDraggableList={
  name:title,
  items:[],
  id:uuidv1()
} 

lists[uuidv1()]=newDraggableList

tasksObjectContainer[uuidv1()]=newDraggableList

console.log('addList end render1',render1)

setrender1(!render1)

}

const editCardModal=(card, cardId, cardContent)=>{
    // console.log('card')
 
    // console.log(JSON.stringify(card))
    // card.content="chand"

    // console.log(JSON.stringify(card))

    
  //  let editCardModalRef= document.getElementById(ModalId)

//    let editCardModalRef= document.getElementById("editCardModal")

  //  console.log('editCardModalRef', editCardModalRef)
  ModalStylerObj.makeWindowShadedClickBlocker(card.modalId)
   ModalStylerObj.toggleModal(card.modalId)

    // setCardEdit(card)
    
    } 

    return (

        <div class="listCintainrClass" style={{ 

            display: "flex",
           justifySelf: "center", 
           height: "100%", 
           width: "100%", 
            //  background:"green",
  
             'overflow':"auto",
        'scrollDirection': 'horizontal',
        position:'relative' ,
  // flex:"1",
      //   'margin':'auto',
        // borderStyle:'dashed',
        // 'borderColor': 'magenta',
        // 'borderWidth': '16px',

        // 'overflow-y':'auto',
        // 'overflow-x':'auto',

      }}>
           
          <DragDropContext
          onDragEnd={result => onDragEndList(result, lists, setLists,tasksObjectContainer ,settasksObjectContainer,render1 ,setrender1 )}> 
        {Object.entries(lists).map(
          ([keyList, list], listIndex)=>{
          console.log('list')
          console.log(list)
          return ( 
            <Droppable 
            droppableId={keyList} 
            key={keyList}
            type="List"
  
            >
           
            {(provided,snapshot)=>{
  
              return (
            <div
            ref={provided.innerRef}
  
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            //   background:"yellow",
            //   minHeight: "70px",
              // overflow:"scroll",
            }}
            key={list.name}
            >  
           {provided.placeholder}
  {    
    // console.log('list bf Draggable',)   
  } {
    // console.log(list)
  }        
  {
          
            <Draggable 
            key={list.id} 
            draggableId={list.id} 
            index={listIndex}//incharge of telling draggable position
            style={{
              position: 'absolute',
  
            }}
            >
            {(provided,snapshot)=>{
                console.log('provided.dragHandleProps') 
                console.log(provided.dragHandleProps) 

              return (
                <React.Fragment>
                <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}

                style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                // minHeight: "70px",
                backgroundColor: snapshot.isDragging
                ? "#ebecf0"
                : "#ebecf0",
                color: "#172b4d",
                ...provided.draggableProps.style,
                borderRadius:"6px",
                    margin:"7.5px 7.5px 3px 15px"
                }}
                >
                <h2>{list.name}</h2>
             {console.log('list')}{console.log(list)}
             { 
  
  
                // return (
                //  retrun(
                  <Droppable
                  type="card"
                   droppableId={list.id} key={list.id}
                   style={{
                    //  overflow:"auto"
                    }}
                   >
                  {
                    (provided,snapshot)=>{
                      return (
                        <React.Fragment>
                        <div {...provided.droppableProps}
                        ref={provided.innerRef}
                        
                        style={{
                            background: snapshot.isDraggingOver ? "rgba(192,192,192,0.3)":"",
                            padding: 4,
                            width: 250,
                            // minHeight: 300,
                            maxHeight: 670,
  
                            // height: 300,
  
                            overflow:"auto"
                        }}
                        > 
                        {  
                             list.items!=undefined && list.items.map((item, index)=>{
                               console.log('item.id 352')
                               console.log(item.id) 
                              return ( 
                  <Draggable key={item.id} draggableId={item.id} 
                            index={index}//incharge of telling draggable position
                            >
                            {(provided,snapshot)=>{

                              return (
                                  <React.Fragment>
                             <div ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps }
                            style={{
                              userSelect: "none",
                              padding: 16,
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#fff"
                                : "#fff",
                              color: "#091e42",
                              ...provided.draggableProps.style,
                              borderRadius:"3px",
                              boxShadow:"0 1px 0 rgba(9,30,66,.25)",
                            }}
                        onClick={(e)=>{
 console.log("event fdfdf",e)   
 console.log('CardModalId fm event', )
 editCardModal(item,item.id,item.content)

                        }}>
                        {item.content}
 
                            </div>

                            </React.Fragment>
                              )
                            }}
                            </Draggable>
                              )
                
                                      })
                          // }
              
                      }
                        
    </div>
  <div>
  <AddCardModal addCard={addcard}  listId={list.id}> </AddCardModal >
 
  </div>
    
  
    </React.Fragment>      
                    )       }
                      }
  
                   </Droppable>
  
                // )
                // )
                
                    }
           
             
                </div> 
                </React.Fragment>
                )
              }}
            </Draggable>
            
          }
        
          </div>
          )
            }
           
          }
         
          
          </Droppable>
  
          ) 
        })   
        }
     
        </DragDropContext>
          <div style={{
            margin:"7.5px 7.5px 3px 15px"

          }}>
          <AddListModal addListId={uuidv1()} addList={addList}
          listsContainerProp={listsContainer} ></AddListModal>

           </div>
         

           {
 Object.entries(lists).map(([key,list],index)=>{
console.log('list end', list )
    if(list.items.length){
      console.log('list.items.length', index )
      let cardModalRender=[]
      list.items.forEach((val,indexFor)=>{
        cardModalRender.push(<CardModal id={val.modalId} card={val} editTitle={editTitle} ></CardModal>)
        // let cardModalRender=(<CardModal id={val.modalId} card={val} ></CardModal>)
        console.log('list.items.length indexFor', indexFor )
        console.log(cardModalRender)
        // var elem = document.createElement('div');

        // document.body.appendChild(<CardModal id={val.modalId} card={val} editTitle={editTitle} ></CardModal>)
        return cardModalRender

        // cardModalRender

      })
    //   document.body.appendChild(cardModalRender)
      return (<div 
        // style={
        //   { 
    //   position: 'absolute',
    //   top: 0,
    //   bottom: 0,
    //    height: '1000vh', width: '1000vh',zIndex:-1}
// } 
    id="cardModalRenderContainer">{
        cardModalRender
    }</div>)

    }

        }
            )
            // 
     }

           
          </div>
      
   
       
        )
}

