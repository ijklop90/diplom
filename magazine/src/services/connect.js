import Pool from 'pg'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'kalima90',
    port: 5432
})

const getData = () => {
    return new Promise((res,rej)=> {
        pool.query(`SELECT * FROM postgres`, (error, results)=> {
            if(error) {
                rej(error)
            }
            res(results.rows)
        })
    })
}

export default getData;