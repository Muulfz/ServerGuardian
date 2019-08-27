AddEventHandler('scanRequest', function(player, url, token)
    local method = "POST"
    PerformHttpRequest(url, function(code, result, headers)
        if(result == 'offline') then
            TriggerEvent('ServerGuardianDrop', player)
        end
    end, method,
            json.encode(player),
            { ["Content-Type"] = "application/json", ["GuardianAuth"] = token })
end)

