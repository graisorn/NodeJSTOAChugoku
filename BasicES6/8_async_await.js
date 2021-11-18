const f = async() => {
    let promise = new Promise((resolve,reject)=>{
        console.log("กำลังโหลดข้อมูล...")
        setTimeout(()=> {
            resolve("done")
        },2000)
    })

    let result = await promise // รอจนครบเวลาที่ตั้ง
    console.log(result)
}

f()