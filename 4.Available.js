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

//   const out=
  const Available=p.map(({...e})=>{
    if(e.isActive){
        e.isActive="Available";
    }else{
        e.isActive="NotAvailable";
    }
    return e;
  })

  // console.log("ori",p);
  console.log("updated",Available);