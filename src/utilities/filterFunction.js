const sortByDate = (data, type) => {

    if(type === "new"){
      return [...data].sort((a,b)=> b.timeStamp - a.timeStamp);
    }
    else {
        return [...data].sort((a,b)=> a.timeStamp - b.timeStamp);
    }
}

export {sortByDate}