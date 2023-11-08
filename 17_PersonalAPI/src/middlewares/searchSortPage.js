'use strict'
/* -------------------------------------------------------------------------- */
/*                      Searching & Sorting & Pagination:                     */
/* -------------------------------------------------------------------------- */

module.exports =  (req,res,next) => {
    /* -------------------------------- Searching ------------------------------- */

        // const search = req.query.search    
        // const sort=req.query.sort   
        // const data = wait BlogPost.find({title: {$regex: 'Test 1', $options: 'i' }} ) // büyük/küçük harfe duyarlı değil
        // const data = BlogPost.find(search).sort('title')    //? sıralama
        // const data = await BlogPost.find({title:'test 0 title'})
        // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        // { <field>: { $regex: 'pattern', $options: '<options>' } }  // option >> i olursa büyük kück harf duyarli olmasin
        // const data = await BlogPost.find({title: { $regex: search['test 13'], $options: 'i' } }) >> test 13 icegen
        // const data = await BlogPost.find({title: { $regex: search.title, $options: 'i' } })  >> title a göre ara
        //   const data = await BlogPost.find().populate("categoryId")

         const search = req.query?.search || {}
        
        for(let key in search)search[key]={$regex: search[key], $options: 'i' } 
        //    console.log(req.query.search);
    
        /* --------------------------------- Sorting -------------------------------- */
             
        // const sort = req.query.sort
        // Sıralama bilgisini URL'den alın ve sıralama nesnesine çevirin

        //  const sort = req.query?.sort || {}
        // SORTING: URL?sort[key1]=1&sort[key2]=-1 (1:ASC, -1:DESC)
        // SORTING: URL?sort[key1]=asc&sort[key2]=desc  

        const sort = {}
        if (req.query.sort) {
        const sortParams = req.query.sort;
        for (const key in sortParams) {
            sort[key] = parseInt(sortParams[key]);
        }
        }
        // const data = await BlogPost.find(search).sort(sort)
        
        /* ------------------------------ Page & Limit ------------------------------ */
    
        let limit = Number(req.query?.limit)
        limit = limit > 0 ? limit : null
        let page = Number(req.query?.page)
        page = (page > 0 ? page : 1) - 1
        let skip = Number(req.query?.skip)
        skip = skip > 0 ? skip : (page*limit)
    
        // const data = await BlogPost.find(search).limit(limit).page(3)
        res.getModelList = async (Model,populate=null) =>{
            return await Model.find(search).skip(skip).limit(limit).populate(populate) 
        }
     
        res.getModelListDetail = async (Model) =>{
            const data = await Model.find(search)
            let details = {
                search,
                sort,
                limit,
                skip,
                page,
                pages : {
                    current : page + 1,
                    next : page +2,
                    previous : page,
                    total : Math.ceil(data.length/limit)
                },
                totalRecords : data.length 
            }
            details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
            if (details.totalRecords <= limit) details.pages = false

            return details
        }


    next()
}