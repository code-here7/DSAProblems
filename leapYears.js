function leap_year_range(st_year, end_year)
{
    for(let i = st_year ; i<= end_year ; i++)
    {
        if((i%4 === 0 && i%100 !== 0) || (i%100 === 0 && i%400 === 0))
        {   
            { console.log(i); }
        }
    }
}
leap_year_range(1994, 2025)