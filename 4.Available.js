const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];

  const Available=p.map(({...e})=>{
    if(e.isActive){
        e.isActive="Available";
    }else{
        e.isActive="Not Available";
    }
    return e;
  })

  // console.log("ori",p);
  console.log("updated",Available);

  const availableUsingReduce=p.reduce((acc,{...cur})=>{
    // console.log(cur);
    if(cur.isActive){
      cur.isActive="Available";
    }else{
      cur.isActive="Not Available";
    }
    acc.push(cur);
    return acc;
  },[]);

  console.log("UpdatedUsingReduce",availableUsingReduce);



