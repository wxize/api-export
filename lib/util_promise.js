// tool 
class UPromise {

    /** 
     * 顺序执行 
     * */
    queue(tasks) {
        return tasks.reduce((promise, task) => {
            return promise.then(() => {
                return new Promise((resolve, reject) => {
                    task()
                    .then(() => {
                        resolve()	
                    })
                    .catch(err => {
                        reject(err)
                    })
                })	
            })
        }, Promise.resolve())
    }
}

// use new
module.exports = UPromise