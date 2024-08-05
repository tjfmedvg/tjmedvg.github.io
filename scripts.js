let totalTimeLogged = 0;
let totalRecruitingTime = 0;
let totalEventsHosted = 0;

function addPlayer(button) {
    const playerName = prompt('Enter player name:');
    if (playerName) {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.innerHTML = `
            <span>${playerName}</span>
            <div class="player-info">
                <div class="time-logged">0</div>
                <div class="events-attended">0</div>
                <div class="recruiting-time">0</div>
            </div>
            <button class="btn edit" onclick="editPlayer(this)">Edit</button>
            <button class="btn remove" onclick="removePlayer(this)">Remove</button>
        `;
        button.previousElementSibling.appendChild(playerDiv);
        saveToLocalStorage();
    }
}

function removePlayer(button) {
    if (confirm('Are you sure you want to remove this player?')) {
        const playerDiv = button.parentElement;
        playerDiv.remove();
        updateTotals();
        saveToLocalStorage();
    }
}

function editQuota(element) {
    const timeLogged = prompt('Enter time logged (hours):', element.getAttribute('data-time-logged') || '0');
    const eventsAttended = prompt('Enter events attended:', element.getAttribute('data-events-attended') || '0');
    const recruitingTime = prompt('Enter recruiting time (hours):', element.getAttribute('data-recruiting-time') || '0');

    element.setAttribute('data-time-logged', timeLogged);
    element.setAttribute('data-events-attended', eventsAttended);
    element.setAttribute('data-recruiting-time', recruitingTime);

    updateTotals();
    saveToLocalStorage();
}

function editPlayer(button) {
    const playerDiv = button.parentElement;
    const timeLogged = prompt('Enter time logged (hours):', playerDiv.querySelector('.time-logged').textContent);
    const eventsAttended = prompt('Enter events attended:', playerDiv.querySelector('.events-attended').textContent);
    const recruitingTime = prompt('Enter recruiting time (hours):', playerDiv.querySelector('.recruiting-time').textContent);

    playerDiv.querySelector('.time-logged').textContent = timeLogged;
    playerDiv.querySelector('.events-attended').textContent = eventsAttended;
    playerDiv.querySelector('.recruiting-time').textContent = recruitingTime;

    updateTotals();
    saveToLocalStorage();
}

function updateTotals() {
    totalTimeLogged = 0;
    totalRecruitingTime = 0;
    totalEventsHosted = 0;

    document.querySelectorAll('.player').forEach(playerDiv => {
        totalTimeLogged += parseFloat(playerDiv.querySelector('.time-logged').textContent);
        totalRecruitingTime += parseFloat(playerDiv.querySelector('.recruiting-time').textContent);
    });

    document.querySelectorAll('.command-box').forEach(commandBox => {
        totalTimeLogged += parseFloat(commandBox.getAttribute('data-time-logged') || '0');
        totalRecruitingTime += parseFloat(commandBox.getAttribute('data-recruiting-time') || '0');
        totalEventsHosted += parseFloat(commandBox.getAttribute('data-events-attended') || '0');
    });

    document.getElementById('total-time-logged').textContent = totalTimeLogged.toFixed(2);
    document.getElementById('total-recruiting-time').textContent = totalRecruitingTime.toFixed(2);
    document.getElementById('total-events-hosted').textContent = totalEventsHosted.toFixed(2);
}

function resetQuotas() {
    document.querySelectorAll('.player').forEach(playerDiv => {
        playerDiv.querySelector('.time-logged').textContent = '0';
        playerDiv.querySelector('.events-attended').textContent = '0';
        playerDiv.querySelector('.recruiting-time').textContent = '0';
    });

    document.querySelectorAll('.command-box').forEach(commandBox => {
        commandBox.setAttribute('data-time-logged', '0');
        commandBox.setAttribute('data-events-attended', '0');
        commandBox.setAttribute('data-recruiting-time', '0');
    });

    updateTotals();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const data = {
        players: [],
        commands: [],
        totalTimeLogged,
        totalRecruitingTime,
        totalEventsHosted
    };

    document.querySelectorAll('.player').forEach(playerDiv => {
        const player = {
            name: playerDiv.querySelector('span').textContent,
            timeLogged: playerDiv.querySelector('.time-logged').textContent,
            eventsAttended: playerDiv.querySelector('.events-attended').textContent,
            recruitingTime: playerDiv.querySelector('.recruiting-time').textContent
        };
        data.players.push(player);
    });

    document.querySelectorAll('.command-box').forEach(commandBox => {
        const command = {
            quota: commandBox.textContent,
            timeLogged: commandBox.getAttribute('data-time-logged') || '0',
            eventsAttended: commandBox.getAttribute('data-events-attended') || '0',
            recruitingTime: commandBox.getAttribute('data-recruiting-time') || '0'
        };
        data.commands.push(command);
    });

    localStorage.setItem('quotaTrackerData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('quotaTrackerData'));
    if (data) {
        data.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <div class="player-info">
                    <div class="time-logged">${player.timeLogged}</div>
                    <div class="events-attended">${player.eventsAttended}</div>
                    <div class="recruiting-time">${player.recruitingTime}</div>
                </div>
                <button class="btn edit" onclick="editPlayer(this)">Edit</button>
                <button class="btn remove" onclick="removePlayer(this)">Remove</button>
            `;
            document.querySelector('.players').appendChild(playerDiv);
        });

        data.commands.forEach(command => {
            const commandBoxes = document.querySelectorAll('.command-box');
            commandBoxes.forEach(commandBox => {
                if (commandBox.textContent === command.quota) {
                    commandBox.setAttribute('data-time-logged', command.timeLogged);
                    commandBox.setAttribute('data-events-attended', command.eventsAttended);
                    commandBox.setAttribute('data-recruiting-time', command.recruitingTime);
                }
            });
        });

        totalTimeLogged = data.totalTimeLogged;
        totalRecruitingTime = data.totalRecruitingTime;
        totalEventsHosted = data.totalEventsHosted;
        updateTotals();
    }
}
