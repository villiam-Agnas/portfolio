async function fetchData(){
    try{
        const response = await fetch(`https://api.github.com/users/villiam-Agnas/repos`) 

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        const filter = data.filter(repo => repo.visibility === 'public' && repo.topics.includes('portfolio'))

        const description = {
            "improved-js-game": "In this assignment we where tasked to make a game with JavaScript and i decided to code blackjack. See if you got what it takes to beat the house!",
            "the-book-shop-boys": "Books are a big part of my interests so on this website you can read about the books i read trough the year 2025. But remember, no admittance except on party business!",
            "version-control-assignment": "On this website you can read about version control and how its effectively used in a workplace. You can also find descriptions of the most common git commands and what they do."
        }
        
        filter.forEach(repo => {

            const project = document.createElement("div")
            project.classList.add("project")
            
            const imgWrapper = document.createElement("div")
            imgWrapper.classList.add("project-img-wrapper")

            const img = document.createElement("img")
            img.classList.add("project-img")
            img.src = `../img/${repo.name}.png`

            imgWrapper.appendChild(img)
            project.appendChild(imgWrapper)

            const desc = document.createElement("div")
            desc.classList.add("project-desc")
            
            const title = document.createElement("h2")
            title.classList.add("project-title")
            title.textContent = repo.name

            const info = document.createElement("p")
            info.classList.add("project-info")
            info.textContent = description[repo.name]

            const nav = document.createElement("nav")
            nav.classList.add("project-nav")

            const githubLink = document.createElement("a")
            githubLink.classList.add("project-link")
            githubLink.href = repo.html_url
            githubLink.textContent = "Link to GitHub page"
            
            const liveLink = document.createElement("a")
            liveLink.classList.add("project-page")
            liveLink.href = `https://villiam-Agnas.github.io/${repo.name}/`
            liveLink.textContent = "Link to live website"
            
            nav.appendChild(githubLink)
            nav.appendChild(liveLink)
            desc.appendChild(title)
            desc.appendChild(info)
            desc.appendChild(nav)
            project.appendChild(desc)
            const container = document.querySelector(".main")
            container.appendChild(project)

        })
        
    } catch (error) {
        console.error(error)
    }

}

fetchData()